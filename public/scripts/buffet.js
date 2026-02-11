function showDay(day) {

    document.querySelectorAll('.day-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.day-tab').forEach(b => b.classList.remove('active'));
    document.getElementById('day-' + day).classList.add('active');

    document.querySelectorAll('.day-tab').forEach(dayTab => {

        if (dayTab.textContent.trim().startsWith(day)) dayTab.classList.add('active');

    });
}
