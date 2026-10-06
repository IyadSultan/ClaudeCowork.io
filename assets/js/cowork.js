// Shared page behaviour for the Cowork tutorial.
// 1) Step chips: any .demo-preset-row[data-stages] drives the stages whose
//    ids are "<prefix>0", "<prefix>1", ... and an optional Next button.
// 2) Copy buttons on every .cw-prompt block.
// Nothing on this site talks to Claude.

(function () {
  "use strict";

  function bindStepper(row) {
    var prefix = row.getAttribute("data-stages");
    var chips = row.querySelectorAll(".demo-chip");
    var last = chips.length - 1;
    var nextBtn = document.getElementById(prefix + "next");
    var status = document.getElementById(prefix + "status");
    var step = 0;

    function go(next) {
      step = Math.max(0, Math.min(last, next));
      for (var i = 0; i <= last; i += 1) {
        var stage = document.getElementById(prefix + i);
        if (stage) {
          stage.hidden = i !== step;
        }
        chips[i].classList.toggle("is-on", i === step);
        chips[i].setAttribute("aria-pressed", i === step ? "true" : "false");
      }
      if (nextBtn) {
        nextBtn.textContent = step === last ? "Start over" : "Next";
      }
      if (status) {
        status.textContent = "Step " + (step + 1) + " of " + (last + 1) + ": " + chips[step].textContent;
      }
    }

    Array.prototype.forEach.call(chips, function (chip, i) {
      chip.addEventListener("click", function () { go(i); });
    });
    if (nextBtn) {
      nextBtn.addEventListener("click", function () { go(step === last ? 0 : step + 1); });
    }
    go(0);
  }

  function bindCopy(block) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cw-copy";
    btn.textContent = "Copy";
    btn.setAttribute("aria-label", "Copy this prompt");
    btn.addEventListener("click", function () {
      var text = block.getAttribute("data-text") || block.firstChild.textContent;
      navigator.clipboard.writeText(text.trim()).then(function () {
        btn.textContent = "Copied";
        setTimeout(function () { btn.textContent = "Copy"; }, 1500);
      }, function (err) {
        console.error("Copy failed:", err);
        btn.textContent = "Select and copy";
      });
    });
    block.appendChild(btn);
  }

  document.querySelectorAll(".demo-preset-row[data-stages]").forEach(bindStepper);
  document.querySelectorAll(".cw-prompt").forEach(bindCopy);
})();
