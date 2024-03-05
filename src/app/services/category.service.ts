import { Injectable } from '@angular/core';
import { Category } from '../../shared/model/Category';import { LanguagesType } from '../../shared/model/Languages';
import { TranslateWord } from '../../shared/model/TranslateWord';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  Categories = new Map<number, Category>();
  nextId = 2;
  constructor() {
    this.Categories.set(0, new Category("InHouse", 0, LanguagesType.English, [
        new TranslateWord("Door", "דלת", LanguagesType.English),
        new TranslateWord("Kitchen", "מטבח", LanguagesType.English),
        new TranslateWord("Room", "חדר", LanguagesType.English)
    ], new Date())); 
    this.Categories.set(1, new Category("Sports", 1, LanguagesType.English, [
        new TranslateWord("Ball", "כדור", LanguagesType.English),
        new TranslateWord("Player", "שחקן", LanguagesType.English),
        new TranslateWord("Coach", "מאמן", LanguagesType.English)
    ], new Date())); 
}

  list(): Category[] {
    return Array.from(this.Categories.values());  }
 
 get(id: number): Category | undefined {
  return this.Categories.get(id);
  }

  delete(id: number): void {
    this.Categories.delete(id);
    console.log(this.Categories)
  }
  
  update(category: Category): void {
    if (this.Categories.has(category.id)) {
      category.lastUpdate = new Date(); 
      category.edited = true; 
      this.Categories.set(category.id, category);
    }
  }

  add(newCategoryData: Category) {
    newCategoryData.id = this.nextId;
    newCategoryData.lastUpdate = new Date(); 
    newCategoryData.edited = true; 
    this.Categories.set(this.nextId, newCategoryData);
    this.nextId++;
  }
}


 