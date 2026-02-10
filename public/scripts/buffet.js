function showDay(day) {

    document.querySelectorAll('.day-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.day-tab').forEach(b => b.classList.remove('active'));
    document.getElementById('day-' + day).classList.add('active');

    document.querySelectorAll('.day-tab').forEach(b => {

        if (b.textContent.trim().startsWith(day)) b.classList.add('active');

    });
}
