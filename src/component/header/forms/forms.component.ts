import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgModelGroup} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Category } from '../../../shared/model/Category';
import { MatIconModule } from '@angular/material/icon';
import { CategoryService } from '../../../app/services/category.service';
import { LanguagesType } from '../../../shared/model/Languages';
import { TranslateWord } from '../../../shared/model/TranslateWord';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,CommonModule,MatIconModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})

export class FormsComponent implements OnInit {
  constructor(private categoryService: CategoryService, private router: Router) {
    console.log(CategoryService)
  }
  

  @ViewChild('categoryGroup') categoriesGroup?: NgModelGroup; 

  @Input() idString?: string;
  currentCategory: Category = new Category('', 0, LanguagesType.English, [], new Date());
  currentWord: string = '';

  sourceLanguage: string = LanguagesType.English;
  targetLanguage: string = LanguagesType.Hebrew;

  ngOnInit(): void {
    if (this.idString) {
      const categoryId: number = parseInt(this.idString);
      const category = this.categoryService.get(categoryId);
      if (category) {
        this.currentCategory = category;
      }
    }
  }

  addWords() {
    this.currentCategory.ListWords.push(new TranslateWord('', '', LanguagesType.English)); 
  }

  removeWords(index: number) {
    this.currentCategory.ListWords.splice(index, 1);
    this.categoriesGroup?.control.markAsDirty();
  }

  onSubmitRegistration() {
    console.log("Form submitted!");
    console.log(this.currentCategory + this.currentWord);
    if (this.idString) {
      this.categoryService.update(this.currentCategory);
    } else {
      this.categoryService.add(this.currentCategory);
    }
    this.router.navigate(['/']);
  }

  hasNewWord(): boolean {
    return this.currentCategory.ListWords.length > 0;
  }
}
