import { NextFunction, Request, Response } from 'express';
import { controller } from './decorators';
import { get, use } from './decorators';

// function requireAuth (req: Request, res: Response, next: NextFunction): void {
//     if (req.session && req.session.loggedIn) {
//         next();
//         return;
//     }
//     res.status(403).send('Not permitted!');
// }

@controller('')
class RootController {
    @get('/')
    getRoot(req: Request, res: Response) {
        res.send('Hello from root');
    }

    @get('/protected')
    // @use(requireAuth)
    getProtected(req: Request, res: Response) {
        res.send('Welcome to protected route. Logged in user.');
    }
}