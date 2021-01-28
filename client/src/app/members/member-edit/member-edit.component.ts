import { ToastrService } from 'ngx-toastr';
import { MembersService } from 'src/app/_services/members.service';
import { AccountService } from 'src/app/_services/account.service';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { Member } from 'src/app/_models/member';
import { User } from 'src/app/_models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css'],
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm | undefined;
  member: Member | undefined;
  user: User | undefined;
  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any) {
    if (this.editForm?.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(
    private accountService: AccountService,
    private memberService: MembersService,
    private toastr: ToastrService
  ) {
    this.accountService.currentUser$
      .pipe(take(1))
      .subscribe((user) => (this.user = user));
  }

  ngOnInit(): void {

    this.loadMember();
  }

  loadMember() {
    if (this.user !== undefined) {
      this.memberService.getMember(this.user.userName).subscribe((member) => {
        this.member = member;
      });
    }
  }

  updateMember() {
    this.memberService.updateMember(this.member).subscribe(() => {
      this.toastr.success('Profile saved succesfully');
      this.editForm?.reset(this.member);
    });
  }
}
