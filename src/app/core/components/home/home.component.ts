import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {UsersApiService} from '../../services/users-api.service';
import {firstValueFrom} from 'rxjs';
import {UserResultDto} from '../../models/users/user-result-dto';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  getByIdForm: FormGroup;
  users: UserResultDto[] = [];

  constructor(private userService: UsersApiService) {
    this.getByIdForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
    });
  }

  async ngOnInit(): Promise<void> {
    this.users = await firstValueFrom(this.userService.getAllUsers$());
    alert(JSON.stringify(this.users));
  }

  async onSubmit() {
    const user = await firstValueFrom(this.userService.getUserById$(this.getByIdForm.value.id));

    alert(JSON.stringify(user));
  }
}
