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
pag=0;
resul!:number;
leftArrow:boolean=false;
rightArrow:boolean=true;



  constructor( public nav:NavbarComponent , private service:UploadService) { }

  ngOnInit(): void {
    this.leftArrow=false;
    this.rightArrow=true;
    this.service.getTags().subscribe((tag)=>{
      this.tags=tag;
      this.resul=this.tags.length;
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

  nextPage(){
    this.pag++;
    this.service.getTags(this.pag).subscribe((tag)=>{
      this.resul=tag.length;
      if(this.resul>0){
        this.tags=tag;
      }
      this.controlArrow()

    })

  }

  prevPage(){
    this.pag--;
    this.service.getTags(this.pag).subscribe((tag)=>{
      this.resul=tag.length;
      if(this.resul>0 && this.pag>=0){
        this.tags=tag;
      }
      this.controlArrow();

    });
  }

  controlArrow(){
    if(this.resul>0){
      if(this.resul<7){
        this.rightArrow=false;
      }else {this.rightArrow=true;}
    }else{
      this.rightArrow=false;
      this.prevPage();
    }

    if(this.pag>0){
      this.leftArrow=true;
    }else {
      this.leftArrow=false;
    }
  }

  go(){
    this.cleanSearchTags()
    this.nav.tagModal=false;
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


