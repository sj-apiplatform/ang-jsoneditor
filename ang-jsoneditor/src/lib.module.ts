import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonEditorComponent } from './jsoneditor/jsoneditor.component';
import { JsonEditor2Component } from './jsoneditor/jsoneditor2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    JsonEditorComponent,
    JsonEditor2Component
  ],
  exports: [
    JsonEditorComponent,
    JsonEditor2Component
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class NgJsonEditorModule {

  public static forRoot(): ModuleWithProviders {

    return {
      ngModule: NgJsonEditorModule,
      providers: [
      ]
    };
  }
}
