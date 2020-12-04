import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  items = [];

  constructor() {
    this.items = [
      {
        site: 'https://test-weather.netlify.app/',
        src: '../assets/weather.png',
        info: 'Weather App',
      },
      {
        site: 'https://testlabs.netlify.app/',
        src: '../assets/testlabs.png',
        info: 'Test Labs 😅',
      },
      {
        site: 'https://xalvic-gallery.netlify.app/',
        src: '../assets/gallery.png',
        info: 'An Image Gallery',
      },
      {
        site: 'https://just-note-down.netlify.app/',
        src: '../assets/note.gif',
        info: 'Note App',
      },
    ];
  }

  ngOnInit(): void {}
}
