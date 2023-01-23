import { Component, OnInit } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {UploadService} from "../upload.service";
import {Tag} from "../interface";
import * as events from "events";
import {query} from "@angular/animations";

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.scss']
})
export class TagsListComponent implements OnInit {
tagsSelected: number[]=[];
tags: Tag[]=[];
tagQuery:string="";



  constructor( public nav:NavbarComponent , private service:UploadService) { }

  ngOnInit(): void {

    this.service.getTags().subscribe((tag)=>{
      this.tags=tag;
    })


  }

  select(id:number){

  if(this.isSelected(id)){
    this.tagsSelected=this.tagsSelected.filter( tag => tag!== id)
  }
  else {
    this.tagsSelected.push(id);
  }
    console.log(this.tagsSelected);
  }


  isSelected(id:number){
    const isSelected= this.tagsSelected.includes(id);
    return isSelected
  }


  cleanSearchTags(){
    this.tagsSelected=[];
  }

  searchTags(){
    let s="";
    this.tagsSelected.forEach(tag=>{
     this.tagQuery+=tag+",";
    });
    this.tagQuery=this.tagQuery.slice(0,this.tagQuery.length-1);
    s=this.tagQuery;
    this.tagQuery="";
    console.log(s);
    return s;
  }

}


