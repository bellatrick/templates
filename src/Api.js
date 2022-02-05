import axios from "axios";

const api = axios.create({
  baseURL:
    "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com",
});

export const getTemplates = () => api.get('/api/v1/public/task_templates').then((res) => res.data);
 