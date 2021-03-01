import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { UserEdit } from '../../models/user-edit.model';
import { User } from '../../models/user.model';
import { UserInfoComponent } from '../controls/user-info.component';
import { Role } from '../../models/role.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  columns: any[] = [];
  rows: User[] = [];
  rowsCache: User[] = [];
  editedUser: UserEdit;
  sourceUser: UserEdit;
  editingUserName: { name: string };
  loadingIndicator: boolean;

  allRoles: Role[] = [];

  @ViewChild('editorModal', { static: true })
  editorModal: ModalDirective;
  @ViewChild('userEditor', { static: true })
  userEditor: UserInfoComponent;

  constructor() { }

  ngOnInit(): void {
  }


}
