(() => {
  "use strict";

  const MODES = {
    exam: {
      label: "Simulador de examen",
      count: 40,
      minutes: 60,
      instantFeedback: false,
      stratified: true
    },
    practice: {
      label: "Práctica rápida",
      count: 20,
      minutes: 0,
      instantFeedback: true,
      stratified: true
    },
    bank: {
      label: "Banco completo",
      count: 100,
      minutes: 0,
      instantFeedback: true,
      stratified: false
    }
  };

  const CATEGORY_QUOTAS_40 = {
    "Fundamentos": 7,
    "Ciclo de vida": 5,
    "Pruebas estáticas": 3,
    "Análisis y diseño": 12,
    "Gestión de pruebas": 12,
    "Herramientas": 1
  };

  const CATEGORY_QUOTAS_20 = {
    "Fundamentos": 4,
    "Ciclo de vida": 3,
    "Pruebas estáticas": 2,
    "Análisis y diseño": 5,
    "Gestión de pruebas": 5,
    "Herramientas": 1
  };

  const $ = (id) => document.getElementById(id);
  const homeView = $("homeView");
  const quizView = $("quizView");
  const resultsView = $("resultsView");

  let state = null;
  let timerId = null;

  function shuffle(items) {
    const arr = [...items];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function stratifiedSample(count) {
    const quotas = count === 40 ? CATEGORY_QUOTAS_40 : CATEGORY_QUOTAS_20;
    const selected = [];
    Object.entries(quotas).forEach(([category, quota]) => {
      const pool = QUESTIONS.filter(q => q.category === category);
      selected.push(...shuffle(pool).slice(0, quota));
    });
    return shuffle(selected);
  }

  function prepareQuestions(modeKey) {
    const config = MODES[modeKey];
    let selected;
    if (config.count === 100) {
      selected = shuffle(QUESTIONS);
    } else if (config.stratified) {
      selected = stratifiedSample(config.count);
    } else {
      selected = shuffle(QUESTIONS).slice(0, config.count);
    }

    return selected.map(q => ({
      ...q,
      displayOptions: shuffle(q.options),
      checked: false
    }));
  }

  function startQuiz(modeKey) {
    const config = MODES[modeKey];
    state = {
      modeKey,
      config,
      questions: prepareQuestions(modeKey),
      current: 0,
      answers: {},
      flagged: new Set(),
      startedAt: Date.now(),
      remainingSeconds: config.minutes * 60,
      finished: false
    };

    showView("quiz");
    $("modeLabel").textContent = config.label;
    $("timerBox").classList.toggle("hidden", !config.minutes);

    if (config.minutes) startTimer();
    renderQuestion();
  }

  function showView(name) {
    homeView.classList.toggle("hidden", name !== "home");
    quizView.classList.toggle("hidden", name !== "quiz");
    resultsView.classList.toggle("hidden", name !== "results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startTimer() {
    stopTimer();
    updateTimer();
    timerId = window.setInterval(() => {
      if (!state || state.finished) return;
      state.remainingSeconds -= 1;
      updateTimer();
      if (state.remainingSeconds <= 0) {
        stopTimer();
        finishQuiz(true);
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerId) window.clearInterval(timerId);
    timerId = null;
  }

  function updateTimer() {
    const seconds = Math.max(0, state.remainingSeconds);
    const min = Math.floor(seconds / 60).toString().padStart(2, "0");
    const sec = (seconds % 60).toString().padStart(2, "0");
    $("timer").textContent = `${min}:${sec}`;
    $("timerBox").classList.toggle("urgent", seconds <= 300);
  }

  function renderQuestion() {
    const q = state.questions[state.current];
    const answer = state.answers[q.id];
    const checked = q.checked;

    $("questionCounter").textContent = `Pregunta ${state.current + 1} de ${state.questions.length}`;
    $("progressBar").style.width = `${((state.current + 1) / state.questions.length) * 100}%`;
    $("categoryBadge").textContent = q.category;
    $("questionText").textContent = q.question;

    const form = $("answerForm");
    form.innerHTML = "";

    q.displayOptions.forEach((opt, idx) => {
      const id = `q${q.id}_${opt.key}`;
      const label = document.createElement("label");
      label.className = "answer-option";
      if (answer === opt.key) label.classList.add("selected");

      if (checked && state.config.instantFeedback) {
        if (opt.key === q.answer) label.classList.add("correct");
        if (answer === opt.key && opt.key !== q.answer) label.classList.add("wrong");
      }

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.id = id;
      input.value = opt.key;
      input.checked = answer === opt.key;
      input.disabled = checked && state.config.instantFeedback;
      input.addEventListener("change", () => {
        state.answers[q.id] = opt.key;
        renderQuestion();
      });

      const text = document.createElement("span");
      text.className = "answer-text";
      const displayLetter = String.fromCharCode(65 + idx);
      text.innerHTML = `<span class="answer-letter">${displayLetter}</span>${escapeHtml(opt.text)}`;

      label.append(input, text);
      form.append(label);
    });

    const isFlagged = state.flagged.has(q.id);
    $("flagBtn").classList.toggle("active", isFlagged);
    $("flagBtn").setAttribute("aria-pressed", isFlagged ? "true" : "false");
    $("flagBtn").textContent = isFlagged ? "★ Marcada para revisar" : "☆ Marcar para revisar";

    $("prevBtn").disabled = state.current === 0;
    const last = state.current === state.questions.length - 1;

    if (state.config.instantFeedback) {
      $("checkBtn").classList.toggle("hidden", checked);
      $("nextBtn").classList.toggle("hidden", !checked || last);
      $("finishBtn").classList.toggle("hidden", !(checked && last));
      $("checkBtn").disabled = !answer;
      if (checked) showFeedback(q);
      else $("feedbackBox").classList.add("hidden");
    } else {
      $("checkBtn").classList.add("hidden");
      $("feedbackBox").classList.add("hidden");
      $("nextBtn").classList.toggle("hidden", last);
      $("finishBtn").classList.toggle("hidden", !last);
    }

    renderQuestionGrid();
  }

  function showFeedback(q) {
    const box = $("feedbackBox");
    const selected = state.answers[q.id];
    const correct = selected === q.answer;
    box.className = `feedback ${correct ? "good" : "bad"}`;
    box.innerHTML = `
      <strong>${correct ? "✓ Respuesta correcta" : "✕ Respuesta incorrecta"}</strong>
      <p>${escapeHtml(q.explanation)}</p>
    `;
  }

  function renderQuestionGrid() {
    const grid = $("questionGrid");
    grid.innerHTML = "";

    state.questions.forEach((q, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "qnav-btn";
      btn.textContent = idx + 1;
      btn.setAttribute("aria-label", `Ir a la pregunta ${idx + 1}`);
      if (idx === state.current) btn.classList.add("current");
      if (state.answers[q.id]) btn.classList.add("answered");
      if (state.flagged.has(q.id)) btn.classList.add("flagged");
      btn.addEventListener("click", () => {
        state.current = idx;
        renderQuestion();
      });
      grid.append(btn);
    });
  }

  function checkCurrent() {
    const q = state.questions[state.current];
    if (!state.answers[q.id]) return;
    q.checked = true;
    renderQuestion();
  }

  function goNext() {
    if (state.current < state.questions.length - 1) {
      state.current += 1;
      renderQuestion();
    }
  }

  function goPrev() {
    if (state.current > 0) {
      state.current -= 1;
      renderQuestion();
    }
  }

  function toggleFlag() {
    const q = state.questions[state.current];
    if (state.flagged.has(q.id)) state.flagged.delete(q.id);
    else state.flagged.add(q.id);
    renderQuestion();
  }

  function finishQuiz(auto = false) {
    if (!state || state.finished) return;

    const unanswered = state.questions.filter(q => !state.answers[q.id]).length;
    if (!auto && unanswered > 0) {
      const ok = window.confirm(`Tienes ${unanswered} pregunta${unanswered === 1 ? "" : "s"} sin responder. ¿Finalizar de todos modos?`);
      if (!ok) return;
    }

    state.finished = true;
    stopTimer();

    const correct = state.questions.filter(q => state.answers[q.id] === q.answer).length;
    const total = state.questions.length;
    const percent = Math.round((correct / total) * 1000) / 10;
    const passed = percent >= 80;

    state.result = { correct, total, percent, passed };
    saveHistory();
    renderResults(auto);
    showView("results");
  }

  function renderResults(auto) {
    const { correct, total, percent, passed } = state.result;
    $("scorePercent").textContent = `${percent}%`;
    $("scoreFraction").textContent = `${correct} / ${total}`;
    $("scoreRing").style.setProperty("--score", percent);

    if (state.modeKey === "exam") {
      $("resultTitle").textContent = passed ? "Simulador aprobado" : "Simulador por reforzar";
      const threshold = Math.ceil(total * 0.80);
      $("resultMessage").textContent = auto
        ? `El tiempo terminó. Obtuviste ${correct} aciertos. En este simulador se requieren ${threshold} de ${total} para alcanzar la meta del 80%.`
        : `Obtuviste ${correct} aciertos. En este simulador se requieren ${threshold} de ${total} para alcanzar la meta del 80%.`;
    } else {
      $("resultTitle").textContent = "Sesión terminada";
      $("resultMessage").textContent = `Resultado: ${correct} de ${total} respuestas correctas. Usa el desglose para decidir qué temas repasar.`;
    }

    renderCategoryResults();
    $("reviewFilter").value = "wrong";
    renderReview("wrong");
  }

  function renderCategoryResults() {
    const holder = $("categoryResults");
    holder.innerHTML = "";

    const categories = [...new Set(state.questions.map(q => q.category))];
    categories.forEach(category => {
      const qs = state.questions.filter(q => q.category === category);
      const correct = qs.filter(q => state.answers[q.id] === q.answer).length;
      const pct = qs.length ? Math.round((correct / qs.length) * 100) : 0;

      const row = document.createElement("div");
      row.className = "category-row";
      row.innerHTML = `
        <strong>${escapeHtml(category)}</strong>
        <span>${correct}/${qs.length} · ${pct}%</span>
        <div class="category-track"><div class="category-fill" style="width:${pct}%"></div></div>
      `;
      holder.append(row);
    });
  }

  function renderReview(filter) {
    const holder = $("reviewList");
    holder.innerHTML = "";

    const filtered = state.questions.filter(q => {
      const wrong = state.answers[q.id] !== q.answer;
      if (filter === "wrong") return wrong;
      if (filter === "flagged") return state.flagged.has(q.id);
      return true;
    });

    if (!filtered.length) {
      holder.innerHTML = `<div class="review-empty">No hay preguntas en este filtro.</div>`;
      return;
    }

    filtered.forEach(q => {
      const selectedKey = state.answers[q.id];
      const selectedText = q.options.find(o => o.key === selectedKey)?.text || "Sin respuesta";
      const correctText = q.options.find(o => o.key === q.answer)?.text || "";
      const isCorrect = selectedKey === q.answer;
      const flagged = state.flagged.has(q.id);

      const item = document.createElement("article");
      item.className = "review-item";
      item.innerHTML = `
        <span class="eyebrow">${escapeHtml(q.category)} · Pregunta original ${q.id}</span>
        <h3>${escapeHtml(q.question)}</h3>
        <p class="${isCorrect ? "ok" : "bad"}"><strong>Tu respuesta:</strong> ${escapeHtml(selectedText)}</p>
        ${!isCorrect ? `<p class="ok"><strong>Correcta:</strong> ${escapeHtml(correctText)}</p>` : ""}
        ${flagged ? `<p class="flag"><strong>Marcada para revisar.</strong></p>` : ""}
        <p><strong>Explicación:</strong> ${escapeHtml(q.explanation)}</p>
      `;
      holder.append(item);
    });
  }

  function saveHistory() {
    const entry = {
      date: new Date().toISOString(),
      mode: state.config.label,
      correct: state.result.correct,
      total: state.result.total,
      percent: state.result.percent,
      passed: state.result.passed
    };
    const history = getHistory();
    history.unshift(entry);
    try {
      localStorage.setItem("dtm_istqb_history", JSON.stringify(history.slice(0, 8)));
    } catch (_) {}
  }

  function getHistory() {
    try {
      const raw = localStorage.getItem("dtm_istqb_history");
      const value = raw ? JSON.parse(raw) : [];
      return Array.isArray(value) ? value : [];
    } catch (_) {
      return [];
    }
  }

  function renderHistory() {
    const holder = $("historyList");
    const history = getHistory();
    holder.innerHTML = "";

    if (!history.length) {
      holder.innerHTML = `<div class="history-empty">Todavía no hay intentos guardados en este navegador.</div>`;
      return;
    }

    history.forEach(item => {
      const date = new Date(item.date);
      const el = document.createElement("div");
      el.className = "history-item";
      el.innerHTML = `
        <strong>${item.percent}%</strong>
        <span>${escapeHtml(item.mode)} · ${item.correct}/${item.total}</span>
        <span>${date.toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" })}</span>
      `;
      holder.append(el);
    });
  }

  function clearHistory() {
    try { localStorage.removeItem("dtm_istqb_history"); } catch (_) {}
    renderHistory();
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  document.querySelectorAll("[data-start]").forEach(btn => {
    btn.addEventListener("click", () => startQuiz(btn.dataset.start));
  });

  $("checkBtn").addEventListener("click", checkCurrent);
  $("nextBtn").addEventListener("click", goNext);
  $("prevBtn").addEventListener("click", goPrev);
  $("flagBtn").addEventListener("click", toggleFlag);
  $("finishBtn").addEventListener("click", () => finishQuiz(false));

  $("exitBtn").addEventListener("click", () => {
    if (!state) return showView("home");
    const ok = window.confirm("¿Salir de este intento? El progreso actual no se guardará.");
    if (ok) {
      stopTimer();
      state = null;
      showView("home");
      renderHistory();
    }
  });

  $("retryBtn").addEventListener("click", () => startQuiz(state.modeKey));
  $("homeBtn").addEventListener("click", () => {
    state = null;
    showView("home");
    renderHistory();
  });

  $("reviewFilter").addEventListener("change", e => renderReview(e.target.value));
  $("clearHistoryBtn").addEventListener("click", () => {
    if (window.confirm("¿Borrar el historial guardado en este navegador?")) clearHistory();
  });

  renderHistory();
})();
