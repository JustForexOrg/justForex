//add "AceEditorComponent" to your modules list
import { Component, ViewChild } from '@angular/core';
import { EditorService } from './editor.service';
import { AceEditorComponent } from 'ng2-ace-editor';

//to use theme eclipse
//with angular-cli add "../node_modules/ace-builds/src-min/ace.js"
//and "../node_modules/ace-builds/src-min/theme-eclipse.js" to "scripts" var into the file angular-cli.json

@Component({
    templateUrl: './editor.component.html',
    styleUrls: [
      './editor.component.css',
      '../../../../node_modules/font-awesome/css/font-awesome.min.css']
})

export class EditorComponent {
   @ViewChild('editor') editor;
  options:any = {minLines: 31, maxLines:1000, printMargin: false};
  tasks: string[];
  title: string;
  text: string = "";
  lang: string = "javascript"

    constructor(private editorService:EditorService){
        this.editorService.getTasks()
            .subscribe(tasks => {
                this.tasks = tasks;
            });
    }

    addTask(event){
        event.preventDefault();
        var t = {
          language: "python",
          name: "my project 1",
          last_edited: "01/01/17",
          text: this.text
        }

        this.editorService.addTask(t)
            .subscribe(task => {
                this.tasks.push(task);
                this.title = '';
            });
    }

    updateStatus(task){
        var _task = {
            _id:task._id,
            title: task.title,
            isDone: !task.isDone
        };

        this.editorService.updateStatus(_task).subscribe(data => {
            task.isDone = !task.isDone;
        });
    }

    ngAfterViewInit() {
        this.editor.setMode(this.lang);

        this.editor.getEditor().setOptions({
            enableBasicAutocompletion: true
        });

        this.editor.getEditor().commands.addCommand({
            name: "showOtherCompletions",
            bindKey: "Ctrl-.",
            exec: function (editor) {

            }
        })
    }

    changeLanguage(lang:string) {
      this.lang = lang;
      //lower case translation of lang
      this.editor.setMode(lang);
    }
}
