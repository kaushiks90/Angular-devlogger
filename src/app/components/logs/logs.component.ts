import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-logs",
  templateUrl: "./logs.component.html",
  styleUrls: ["./logs.component.css"]
})
export class LogsComponent implements OnInit {
  logs: {
    id: string;
    text: string;
    date: any;
  }[];
  constructor() {}

  ngOnInit() {
    this.logs = [
      {
        id: "1",
        text: "Generated Components",
        date: new Date("12/26/2017 12:54:23")
      },
      {
        id: "2",
        text: "Added Components",
        date: new Date("12/27/2017 12:54:23")
      },
      {
        id: "3",
        text: "Updated Components",
        date: new Date("12/28/2017 12:54:23")
      }
    ];
  }
}
