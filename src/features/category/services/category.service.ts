import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Category } from '../model/category.model';
import { Observable, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  private readonly apiUrl = environment.apiUrl;

  private readonly httpClient = inject(HttpClient);

  private readonly categories$ = this.httpClient.get<Category[]>(
    `${this.apiUrl}/categories`
  );

  public categories = toSignal(this.categories$, {
    initialValue: [] as Category[],
  });
}
