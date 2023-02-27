import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

import Task  from 'src/app/models/task';
import List  from 'src/app/models/list';
import { ActivatedRoute, Router,Params } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: List[]= [];
  tasks: Task[] = [];
  listId: string = '';
  selectedListId: string | null = null;



  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

    ngOnInit() {

      console.log(this.taskService);
      this.taskService.getLists()
        .subscribe((lists: Object) => this.lists = lists as List[]);

        this.route.params.subscribe((params: Params) => {
          
          const listId = params['listId'];
          console.log('listId', listId);
          if(!listId) return;
          this.taskService.getTasks(listId)
            .subscribe((tasks: Object) => {
              console.log('tasks', tasks);
              this.tasks = tasks as Task[]
            });
        });

    }
    onTaskClick(task: { completed: boolean; }) {
      task.completed = !task.completed;
    }

    deleteTask(taskId: string , listId :string): void {
      console.log('deleteTask', taskId);
      console.log('this.listId', listId);

      if (listId) {
        this.taskService.deleteTask(listId, taskId).subscribe(
          () => {
            this.tasks = this.tasks.filter(task => task._id !== taskId);
          }
        );
      } else {
        console.log('List ID is empty');
      }}

      deleteList(listId: string): void {
        console.log('deleteList', listId);
        this.taskService.deleteList(listId).subscribe(
          () => {
            this.lists = this.lists.filter(list => list._id !== listId);
          }
        );
      }




}
