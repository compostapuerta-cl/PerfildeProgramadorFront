import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {

	API_URI = 'http://localhost:8080/api/v1';

	constructor(private http: HttpClient) {}

	getUsuarios() {
		return this.http.get(`${this.API_URI}/listarUsuarios`);
	}
}
