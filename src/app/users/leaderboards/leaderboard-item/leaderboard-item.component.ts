import { Component, Input } from '@angular/core';
import { Project } from '../../../projectsFolder/myproject/project';
import { Http } from '@angular/http';
import { UserService } from '../../authentication/services/user.service';

@Component({
  selector: 'leaderboard-item',
  templateUrl: './leaderboard-item.component.html',
  styleUrls: ['./leaderboard-item.component.css']
})
export class LeaderboardItemComponent {

  public profile_pic: string;
  @Input() item: Project;

  constructor(private http: Http, private userService: UserService) {
    console.log(this.item);
    this.userService.getById(this.item.user_id).map(user => {
      console.log(user);
      this.profile_pic = user.profile_pic
    });
  }
}
