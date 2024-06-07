document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get values from the form
        const charisma = parseInt(document.getElementById('charisma-input').value);
        const intelligence = parseInt(document.getElementById('intelligence-input').value);
        const wisdom = parseInt(document.getElementById('wisdom-input').value);
        const dexterity = parseInt(document.getElementById('dexterity-input').value);
        const strength = parseInt(document.getElementById('strength-input').value);
        const creativity = parseInt(document.getElementById('creativity-input').value);
        const collaboration = parseInt(document.getElementById('collaboration-input').value);
        const accountability = parseInt(document.getElementById('accountability-input').value);

        // Calculate total XP
        const totalXP = (charisma + intelligence + wisdom + dexterity + strength + creativity + collaboration + accountability) * 2;

        // Redirect to thank you page with total XP in the URL
        window.location.href = `thankyou.html?totalXP=${totalXP}`;
    });
});
