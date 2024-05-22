class Question {
    constructor(enonce, reponses, reponseCorrecte) {
        this.enonce = enonce;
        this.reponses = reponses;
        this.reponseCorrecte = reponseCorrecte;
    }
    afficher() {
        const container = document.createElement('div');
        container.classList.add('question-container');
        const questionEnonce = document.createElement('h2');
        questionEnonce.textContent = this.enonce;
        container.appendChild(questionEnonce);
        this.reponses.forEach((reponse, index) => {
            const label = document.createElement('label');
            label.textContent = reponse;
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'question';
            input.value = index;
            label.prepend(input);
            container.appendChild(label);
            container.appendChild(document.createElement('br'));
        });
        return container;
    }
}
class Quiz {
    constructor() {
        this.questions = [];
        this.score = 0;
        this.currentQuestionIndex = 0;
    }
    ajouterQuestion(question) {
        this.questions.push(question);
    }
    afficherQuestion() {
        const quizContainer = document.getElementById('quiz');
        quizContainer.innerHTML = '';  // Vide le conteneur précédent
        quizContainer.appendChild(this.questions[this.currentQuestionIndex].afficher());  // Affiche la question actuelle
    }
    collecterReponse() {
        const inputs = document.querySelectorAll('input[name="question"]');
        let reponseUtilisateur;
        inputs.forEach(input => {
            if (input.checked) {
                reponseUtilisateur = parseInt(input.value);  // Convertit la valeur en entier
            }
        });
        if (reponseUtilisateur === this.questions[this.currentQuestionIndex].reponseCorrecte) {
            this.score++;  // Augmente le score si la réponse est correcte
        }
    }
    afficherResultat() {
        const quizContainer = document.getElementById('quiz');
        quizContainer.innerHTML = `<h2>Votre score est : ${this.score} / ${this.questions.length}</h2>`;
    }
    suivant() {
        this.collecterReponse();  // Collecte la réponse actuelle
        this.currentQuestionIndex++;  // Passe à la question suivante
        if (this.currentQuestionIndex < this.questions.length) {
            this.afficherQuestion();  // Affiche la question suivante
        } else {
            this.afficherResultat();  // Affiche le résultat final
        }
    }
}
// Exemple d'utilisation
const question1 = new Question("Quelle est la capitale de la France ?", ["Paris", "Londres", "Berlin", "Madrid"], 0);
const question2 = new Question("Quelle est la couleur du ciel ?", ["Rouge", "Bleu", "Vert", "Jaune"], 1);
const question3 = new Question("Combien de jours y a-t-il dans une semaine ?", ["5", "6", "7", "8"], 2);
const quiz = new Quiz();
quiz.ajouterQuestion(question1);
quiz.ajouterQuestion(question2);
quiz.ajouterQuestion(question3);
document.getElementById('submit').addEventListener('click', () => {
    quiz.suivant();
});
// Démarre le quiz
quiz.afficherQuestion();
