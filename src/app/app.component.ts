import { Component, OnInit } from '@angular/core';
import { Bird } from './bird';
import { BirdService } from './bird.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'winged-in-sight-angular';

  public bird!: Bird [];
  public editBird!: Bird;
  public deleteBird!: Bird;

  constructor(private birdService: BirdService){}
  ngOnInit(): void {
    this.getBird();
  }

  public getBird(): void {
    this.birdService.getBird()
    .subscribe(_bird => {
      this.bird.push();
      console.log(this.bird);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }

  public createBird(addForm: NgForm): void {
    document.getElementById('create-bird-form')?.click()
    this.birdService.addBird(addForm.value).subscribe(
      (response: Bird) => {
        console.log(response);
        this.getBird();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
    }

    public onUpdateBird(bird: Bird): void {
      this.birdService.updateBird(bird!).subscribe(
        (response: Bird) => {
          console.log(response);
          this.getBird();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
        );
      }
    }
