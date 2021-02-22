// import { CourseComponent } from './course/course.component';
import { EmailService } from './email.service';
import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

// @Component({
//     selector: "courses",
//     template: "<h2>Courses Duniya ke Liye</h2>"
//     // Note: whenever the selector <courses> is encountered
//     // Angular will replace it with the template as above
// })
// export class CoursesComponent {

// }

// below are some ways to display title dynamically
// @Component({
//     selector: 'courses',
//     template: '<h2>{{ "Title : " + title }}</h2>'
//     // Note: whenever the selector <courses> is encountered
//     // Angular will replace it with the template as above
// })
// export class CoursesComponent {
//     title = "List of courses:";

// }

// @Component({
//     selector: 'courses',
//     template: '<h2>{{ "title : " + getTitle() }}</h2>'
//     // Note: whenever the selector <courses> is encountered
//     // Angular will replace it with the template as above
// })
// export class CoursesComponent {
//     title = "List of courses:";
    
//     getTitle() {
//         return this.title;
//     }
// }

// using Directives in Angular
// @Component({
//     selector: 'courses',
//     template: `
//             <h2> {{ title }} </h2>
//             <ul>
//                 <li *ngFor ="let course of courses"> {{ course }} </li>  
//             </ul>
//             <h2> {{ sendEmail }} </h2>
//     `
// })
// export class CoursesComponent {
//     title = "List of courses:";
//     courses;

//     constructor() {
//         let service = new CoursesService();
//         this.courses = service.getCourses();
//     }
// }

// export class CoursesComponent {
//     title = "List of courses:";
//     courses;
//     sendEmail;
//     constructor(service: CoursesService , service1: EmailService) {
//         this.courses = service.getCourses();
//         this.sendEmail = service1.sendEmail();
//     }
// }

// @Component({
//     selector: 'courses',
//     template: `
//             <h2> {{ title }} </h2>
//             <h2 [textContent] = "title"> </h2>

//             <img src = "{{ imageUrl }}" />
//             <img [src] = "imageUrl" />
//     `
// })
// export class CoursesComponent {
//     title =  "List of Courses :";
//     imageUrl = "https://cdn4.creativecirclemedia.com/chatham/original/20200107-180154-INS_EAGLE_02_010920.jpg"
// }

// Attribute Binding

// @Component({
//     selector: 'courses',
//     template: `
//            <table border="100px">
//             <tr>
//                 <td [attr.colspan] = "colSpan"> </td>
//             </tr>
//             <tr>
//                 <td [attr.colspan] = "colSpan"> </td>
//             </tr>
//             </table>
//     `
// })
// export class CoursesComponent {
//     colSpan = 2;
// }


// Adding bootstrap to Angular Code
// @Component({
//     selector: 'courses',
//     template: `
//             <button class = "btn btn-primary"> save </button>
//     `
// })
// export class CoursesComponent {

// }

// Class - Binding

// @Component({
//     selector: 'courses',
//     template: `
//             <button class = "btn btn-primary" [class.active] = "isActive"> save </button>
//     `
// })
// export class CoursesComponent {
//     isActive = false;
// }

// Style Binding

// @Component({
//     selector: 'courses',
//     template: `
//             <button [style.backgroundColor] = "isActive ? 'blue' : 'white'"> save </button>
//     `
// })
// export class CoursesComponent{
//     isActive = true;
// }

// Event Binding
// @Component({
//     selector: 'courses',
//     template: `
//             <button (click)="onSave()">Save</button>
//     `
// })
// export class CoursesComponent{ 
//     onSave() {
//         console.log("Button Was Clicked!!");
//     }
// }

// Event object
// @Component({
//     selector: 'courses',
//     template: `
//             <button (click)="onSave($event)">Save</button>
//     `
// })
// export class CoursesComponent{ 
//     onSave($event) {
//         console.log("Button Was Clicked!!" , $event);
//     }
// }

// Event bubbling - and preventing it
// @Component({
//     selector: 'courses',
//     template: `
//             <div (click) = "onDivClick()">
//             <button (click)="onSave($event)">Save</button>
//             </div>
//     `
// })
// export class CoursesComponent{ 
//     onDivClick() {
//         console.log("Div was clicked");
//     }
//     onSave($event) {
//         $event.stopPropogation(); 
//         console.log("Button Was Clicked!!" , $event);
//     }
// }


// Event Filtering - Traditional method
// @Component({
//     selector: 'courses',
//     template: `
//             <input (keyup) = "onKeyUp($event)" />
//     `
// })
// export class CoursesComponent{
//     onKeyUp($event) {
//         if( $event.keyCode == 13 )
//             console.log("Enter was Pressed!");
//     }
// }



// Event Filtering - Angular Method
// @Component({
//     selector: 'courses',
//     template: `
//             <input (keyup.enter) = "onKeyUp()" />
//     `
// })
// export class CoursesComponent{
//     onKeyUp() {
//         console.log("Enter was Pressed!");
//     }
// }

// // Template Variables - Traditional method
// @Component({
//     selector: 'courses',
//     template: `
//             <input (keyup.enter) = "onKeyUp($event)" />
//     `
// })
// export class CoursesComponent{
//     onKeyUp($event) {
//         console.log($event.target.value);
//     }
// }

// Template Variables - Angular method
// @Component({
//     selector: 'courses',
//     template: `
//             <input #email (keyup.enter) = "onKeyUp(email.value)" />
//     `
// })
// export class CoursesComponent{
//     onKeyUp(email) {
//         console.log(email);
//     }
// }

// // Two - Way binding - traditional way
// @Component({
//     selector: 'courses',
//     template: `
//             <input [value] = "email" (keyup.enter) = "email = $event.target.value; onKeyUp()" />
//     `
// })
// export class CoursesComponent{
//     email = "vishal@vishal.com"
//     onKeyUp() {
//         console.log(this.email);
//     }
// }

// Two - Way binding - Angular Way
// @Component({
//     selector: 'courses',
//     template: `
//             <input [(ngModel)] = "email" (keyup.enter) = "onKeyUp()" />
//     `
// })
// export class CoursesComponent{
//     email = "vishal@vishal.com"
//     onKeyUp() {
//         console.log(this.email);
//     }
// }


//using pipes  for data manipulation
// @Component({
//     selector: 'courses',
//     template:`
            
//             {{course.title | uppercase | lowercase }} <br/>
//             {{course.students | number}} <br/>
//             {{course.rating | number :'1.2-2'}} <br/>
//             {{course.price | currency}} <br/>
//             {{course.price | currency: 'AUD'}} <br/>
//             {{course.releaseDate | date : 'shortDate' }} <br/>
//     `
// })
// export class CoursesComponent{
//     course = {
//         title: "The Complete Angular App",
//         students: 30000,
//         rating: 4.92828,
//         price: 190.93,
//         releaseDate: new Date(2016,3,7)
//     }
// }

// Using Custom Pipes

@Component({
    selector: 'courses',
    template: `
            {{ text | summary:20 }}
    `
})
export class CoursesComponent {
    text = "I am Vishal mourya, I am Vishal mourya,I am Vishal mourya,I am Vishal mourya,I am Vishal mourya,I am Vishal mourya,I am Vishal mourya, "
}