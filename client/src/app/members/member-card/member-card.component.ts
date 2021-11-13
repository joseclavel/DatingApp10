import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
// import swal from 'sweetalert';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {

  @Input() member: Member | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  likeFeature(): void  {
    // swal("Hello world!");
    // swal("Here's the title!", "...and here's the text!");
    // swal("Good job!", "You clicked the button!", "success");
    // swal("Click on either the button or outside the modal.")
    // .then((value) => {
    //   swal(`The returned value is: ${value}`);
    // });
    // swal({
    //   title: "Are you sure?",
    //   text: "Once deleted, you will not be able to recover this imaginary file!",
    //   icon: "warning",
    //   buttons: ["No, me equivoqué", "Si, eliminar"],
    //   dangerMode: true,
    // })
    // .then((willDelete) => {
    //   if (willDelete) {
    //     swal("Poof! Your imaginary file has been deleted!", {
    //       icon: "success",
    //     });
    //   } else {
    //     swal("Your imaginary file is safe!");
    //   }
    // });
    // swal("Are you sure you want to do this?", {
    //   buttons: ["Oh noez!", true],
    // });
    // swal("A wild Pikachu appeared! What do you want to do?", {
    //   buttons: [
    //     { cancel: "Run away!" },
    //     { catch: {
    //       text: "Throw Pokéball!",
    //       value: "catch",
    //     }, },
    //     {defeat: true}],
    // })
    // .then((value) => {
    //   switch (value) {

    //     case "defeat":
    //       swal("Pikachu fainted! You gained 500 XP!");
    //       break;

    //     case "catch":
    //       swal("Gotcha!", "Pikachu was caught!", "success");
    //       break;

    //     default:
    //       swal("Got away safely!");
    //   }
    // });
  }

  saveFile(fileName: string): void {
    // ... save file
    alert('Saving file...');
  }

  handleDenial(): void {
      // ... don't save file and quit
      alert('File will not be saved...');
  }

  public handleDismiss(dismissMethod: any): void {
    // dismissMethod can be 'cancel', 'overlay', 'close', and 'timer'
    // ... do something
    alert('Cancel this operation...');
  }

}
