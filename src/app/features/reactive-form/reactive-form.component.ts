import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Genre} from "../../shared/models/genre";
import {Song} from "../../shared/models/song";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  songForm : FormGroup;
  genres : Genre[] = [
    {mainGenre : 'pop'}, {mainGenre : 'pop', subGenre : 'punk'},
    {mainGenre : 'neomelodico', subGenre : 'lirico'},
    {mainGenre : 'classico'}
  ]

  songList : Song[] = []

  song : Song | undefined;

  constructor() { }

  ngOnInit(): void {
    this.songForm = new FormGroup({
        title: new FormControl('', [
          Validators.required,
          Validators.min(1),
          Validators.max(20),
          Validators.pattern('a-zA-Z')]),
        genre: new FormControl('', Validators.required),
        duration: new FormControl()
      }
    )
  }

  addSong() {
    const newSong = this.songForm.value as Song
    this.songList = [...this.songList, newSong]
    this.songForm.reset()
  }

  editSong(songToEdit : Song ){
    const newSong = this.songForm.value as Song
    this.songList = this.songList.map( currentSong => currentSong.title === songToEdit.title ? newSong : currentSong)
    this.song = undefined;
    this.songForm.reset()
}

  setSelected(songFromView : Song) {
    this.songForm.patchValue(songFromView );
    this.song = {...songFromView };
  }


  manageSong() {
    if(this.song){
      this.editSong(this.song)
    }else{
      this.addSong()
    }
  }
}
