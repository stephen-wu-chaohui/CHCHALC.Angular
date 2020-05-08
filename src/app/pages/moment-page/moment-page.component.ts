import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { ActivatedRoute } from '@angular/router';
import { Assemply, Story } from 'src/app/data/api-data';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-moment-page',
  templateUrl: './moment-page.component.html',
  styleUrls: ['./moment-page.component.css']
})
export class MomentPageComponent implements OnInit {
  title = { english: 'Moments', chinese: '精彩瞬间'};

  moment: Story;

  constructor(private actRoute: ActivatedRoute, public data: ChchalcDataService, public datastore: AngularFirestore) { }

  ngOnInit() {
    const cellgroupId = this.actRoute.snapshot.params.cellgroupId;
    const momentId = this.actRoute.snapshot.params.momentId;
    this.datastore.doc(`cellgroups/${cellgroupId}/moments/${momentId}`).get().subscribe(
      next => {
        this.moment = next.data() as Story;
        console.log('moment = ', this.moment);
      },
      error => {
        console.log('error = ', error);
      }
    );
  }

  onClick() {
    if(this.moment.pdfPath) {
      window.open(this.moment.pdfPath);
    }
  }

}
