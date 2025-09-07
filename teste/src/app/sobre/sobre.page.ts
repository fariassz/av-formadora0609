import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule],
})
export class SobrePage {
  descricao: string = 'Olá! Sou [Seu Nome], estudante da disciplina [nome da disciplina]. Este app foi criado como exercício prático no Ionic 🚀.';
}