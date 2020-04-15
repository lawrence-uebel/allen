export class Context {
    queue: Queue;
    inbox: Inbox;
    projects: Project[];
    archive: Project[];
    log: Log;
}

export class Queue {
    items: QueueItem[];
}

export class QueueItem {
    description: string;
    channel?: string;
}

export class Inbox {
    tasks: string[];
}

export class Project {
    tasks: Task[];
}

export class Task {
    description: string;
    nextAction: string;
    doneDef: string;
    id: string;
    subtasks: string[];
}

export class Log {
    items: LogItem[];
}

export class LogItem {
    dateTime: Date;
    description: string;
}