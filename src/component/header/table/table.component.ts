import { Component } from '@angular/core';
import { Category } from '../../../shared/model/Category';
import { TranslateWord } from '../../../shared/model/TranslateWord';
import { LanguagesType } from '../../../shared/model/Languages';
import { MatIconModule } from '@angular/material/icon';
import { DeleteCategoryDialogComponent } from '../delete-category-dialog/delete-category-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../../app/services/category.service';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTableModule, RouterModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  displayedColumns: string[] = ['CategoryName', 'Amount', 'LastUpdate', 'actions'];
  categories: Category[] = [];
  constructor(private categoryService: CategoryService, private dialog: MatDialog) {}

  

  ngOnInit(): void {
    this.categories = this.categoryService.list();
  }

  deleteCategory(id: number, name: string) {
    const dialogRef = this.dialog.open(DeleteCategoryDialogComponent, {
      data: { id: id, name: name }
    });

    dialogRef.afterClosed().subscribe(deletionConfirmed => {
      if (deletionConfirmed == true) {
        this.categoryService.delete(id);
        this.categories = this.categoryService.list();
      }
    });
  }

  
}