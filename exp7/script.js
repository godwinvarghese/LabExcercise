function checkGrammar() {
    const text = document.getElementById('text').value;
    const output = document.getElementById('output');
    const mistakes = [];

    const rules = [
        { regex: /\byour\s+(is|are|were|was|will|would|should|could|have|has|had)\b/gi,
          message: 'Did you mean "you\'re" instead of "your"?' },
        { regex: /\bits\s+(is|has)\b/gi,
          message: 'Did you mean "it\'s" instead of "its"?' },
        { regex: /\btheir\s+(is|was|are|were)\b/gi,
          message: 'Did you mean "there" instead of "their"?' },
        { regex: /\btheyre\b/gi,
          message: 'Did you mean "they\'re"?' }
    ];

    rules.forEach(rule => {
        if (rule.regex.test(text)) {
            mistakes.push(rule.message);
        }
    });

    if (/  /.test(text)) {
        mistakes.push('Found consecutive spaces.');
    }

    if (mistakes.length === 0) {
        output.innerHTML = '<p>No obvious grammar issues found.</p>';
    } else {
        const ul = document.createElement('ul');
        mistakes.forEach(m => {
            const li = document.createElement('li');
            li.textContent = m;
            ul.appendChild(li);
        });
        output.innerHTML = '<h3>Potential Issues:</h3>';
        output.appendChild(ul);
    }
}

document.getElementById('check').addEventListener('click', checkGrammar);
