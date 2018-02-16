import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})

export class UserComponent  { 
  nimi: string; 
  email: string; 
  osoite: osoite;
  harrastukset: string[];
  naytaHarrastukset: boolean;
  posts: Post[];
  
    constructor (private postsService: PostsService){
      this.nimi = 'Nimetön'; 
      this.email = 'etunimi.sukunimi@eioo.fi'; 
      this.osoite = {
        katuosoite:'Kadunnimi 13',
        postiosoite:'12345 Helsinki'
      }
      this.harrastukset = ['Ompelu', 'Ratsastus', 'Laitepilates'];
      this.naytaHarrastukset = false;
      
      this.postsService.getPosts().subscribe(posts => {
          this.posts = posts;
      })
    }  

    vaihdaHarrastukset(){
        if(this.naytaHarrastukset == true){
            this.naytaHarrastukset = false;
        } else {
        this.naytaHarrastukset = true;
        }
    }

    lisaaHarrastus(harrastus: string){
        this.harrastukset.push(harrastus);
    }

    poistaHarrastus(i: number){
        this.harrastukset.splice(i, 1);
    }
}

interface osoite {
    katuosoite: string;
    postiosoite: string;
}

interface Post {
    id: number;
    title: string;
    body: string;
}