import { CategoriaService } from './../../services/categoria.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Categoria } from '../../interfaces/Categoria';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {
  categoriaForm: FormGroup = new FormGroup({});
  categorias: Categoria[] = [];
  categoriaIdEdicao:string | null = null

  constructor(
    private categoriaService: CategoriaService,
    private formBuilder: FormBuilder
  ) {
    this.categoriaForm = formBuilder.group({
      nome: ['', Validators.required],
      telefone: [''],
    });
  }

  list(): void {
    this.categoriaService.list().subscribe((resposta) => (this.categorias = resposta));
  }

  //método executado ao inicializar a página
  ngOnInit(): void {
    this.list();
  }
}
