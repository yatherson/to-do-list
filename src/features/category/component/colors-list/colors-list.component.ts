import { Component, inject } from '@angular/core';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { CategoryService } from '../../services/category.service';
import { categoryBackgroundColors } from '../../constants/category-colors';

const MODULES = [MatDividerModule];

@Component({
  selector: 'app-colors-list',
  standalone: true,
  imports: [...MODULES],
  template: `
    <section class="flex flex-col gap-4 w-full h-auto mb-4">
      <!--Divisor -->
      <mat-divider class="h-full opacity-50" />

      <!--Lista de cores-->
      <div class="flex flex-wrap justify-center item-center mt-4 px-4 gap-4">
        @for (category of categories(); track category.id) {
          <span
            class="select-nome opacity-80 hover:opacity-100 flex items-center justify-center {{
              categoryBackgroundColors[category.color]
            }} px-4 py-2 rounded-xl w-[90] text-center text-white font-semibold">
            {{ category.name }}
          </span>
        }
      </div>
    </section>
  `,
  styles: ``,
})
export class ColorsListComponent {
  private readonly categoryService = inject(CategoryService);

  public categories = this.categoryService.categories;

  public categoryBackgroundColors = categoryBackgroundColors;
}
