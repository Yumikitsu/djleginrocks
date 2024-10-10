import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  allChecked = false;
  submitted = false;

  checkCheckboxes() {
    const checkbox1 = (document.getElementById('checkbox1') as HTMLInputElement).checked;
    const checkbox2 = (document.getElementById('checkbox2') as HTMLInputElement).checked;
    const checkbox3 = (document.getElementById('checkbox3') as HTMLInputElement).checked;
    const checkbox4 = (document.getElementById('checkbox4') as HTMLInputElement).checked;

    this.allChecked = checkbox1 && checkbox2 && checkbox3 && checkbox4;
  }

  submitQuiz() {
    this.submitted = true;
  }
}
