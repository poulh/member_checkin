import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Member } from '../../../sdk/models';
import { MemberApi } from '../../../sdk/services';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  members: Member[];

  constructor(private router: Router,
    private memberApi: MemberApi) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(): void {
    const filter = {
      order: "lastName ASC, firstName ASC"
    };
    this.memberApi.find<Member>(filter).subscribe(members => this.members = members);
  }


  onNewMemberClick(): void {
    this.router.navigateByUrl("/member");
  }


}