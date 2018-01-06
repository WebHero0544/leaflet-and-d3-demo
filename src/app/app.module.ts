import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 组件
import { AppComponent } from './app.component';
import { D3LeafletComponent } from './components/d3-leaflet/d3-leaflet.component';


//服务
import { BaseService } from './services/base.service';


@NgModule({
  declarations: [
    AppComponent,
    D3LeafletComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
