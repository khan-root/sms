import { Router } from "express";
import { cerateSuperAdmin, signInSuperAdmin } from "../controller/super-admin/super-admin-controller.js";

const router = Router()

router.post('/create', cerateSuperAdmin);
router.post('/login', signInSuperAdmin)


export default router