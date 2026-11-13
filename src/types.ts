export type PageRoute = 'home' | 'services' | 'contact';

export type ServiceOption =
  | 'AI Agents & Chatbots'
  | 'AI Workflow Automation'
  | 'Business Process Automation'
  | 'System Integration'
  | 'Other';

export interface NavigateOptions {
  page: PageRoute;
  sectionId?: string;
  preselectedService?: ServiceOption;
}
