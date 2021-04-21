import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-child-route',
  templateUrl: './child-route.component.html',
  styleUrls: ['./child-route.component.css']
})
export class ChildRouteComponent implements OnInit {

  booksDescription:{name:string,description:string,author:string}[]=[
    {name:'Aryabhatta',
    description:`Aryabhata or Aryabhata I was the first of the major mathematician-astronomers from the classical age of Indian mathematics and Indian astronomy. His works include the Āryabhaṭīya and the Arya-siddhanta.For his explicit mention of the relativity of motion, he also qualifies as a major early physicis`,
    author:' Lalla, Bhāskara I, Brahmagupta, Varāhamihira'},

    {name:'TheWall',
    description:`The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe`,
    author:'Hushan Great Wall '},

    {name:'MiddleEast',
    description:`The Middle East is a transcontinental region in Afro-Eurasia which generally includes Western Asia, all of Egypt, and Turkey. The term has come into wider usage as a replacement of the term Near East beginning in the early 20th century`,
    author:' Cairo'},


    {name:'LincolonStory',
    description:`Abraham Lincoln uses his powers as the president of the United States of America as he strives to abolish slavery and reunite his country during the Civil War`,
    author:'Steven Spielberg'},

    {name:'FreedomFighters',
    description:`In the long drawn political struggle for the attainment of swaraj several leaders representing various regions of our sub-continent played their historic role. Each volume contains the significant phase of the movement which generated the spirit of patriotism among the millons of peopl`,
    author:'Lion M. G. Agrawal'}
  ]
  constructor(private route:ActivatedRoute) { }
  title;
  ngOnInit(): void {
  
    this.route.params.subscribe((param:Params)=>{
      console.log(param['name'])
     this.title=param['name']
  })

}
}
