import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './modules/post/post.component';
import { PostItemComponent } from './modules/post/components/post-item/post-item.component';
import { PostDetailsComponent } from './modules/post/components/post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostItemComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
