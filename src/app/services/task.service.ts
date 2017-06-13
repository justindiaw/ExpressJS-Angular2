import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {
	constructor(private http:Http){
		console.log('Task initializing...');
	}

	getTasks(){
		console.log("changed");
		return this.http.get('http://localhost:3000/api/tasks')
			.map(res => res.json());
	}
}