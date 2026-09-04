import { t } from '@lingui/core/macro';

export const getStandardApplicationDescription =
  (): string => t`The base data model every Dejoiy workspace runs on.

#### What "foundation" means

Every Dejoiy workspace starts with this set of objects. They define the shape of your CRM, including relationships, activity, and reporting. Everything else, including marketplace apps, AI agents, and custom objects, plugs into them.

#### Included objects
- **People & Companies**: contact and account records
- **Opportunities**: your sales pipeline
- **Notes & Tasks**: activity and follow-ups
- **Workflows & Dashboards**: automation and reporting

Remove this app and the rest of Dejoiy has nothing to hang off.

#### Build your own app

Extend Dejoiy with your own objects, fields, logic functions, or AI skills. Scaffold a new app in one command:

\`\`\`bash
npx create-twenty-app@latest my-twenty-app
\`\`\`

Then inside the folder:

\`\`\`bash
cd my-twenty-app
yarn twenty dev
\`\`\`

See the documentation for the full walkthrough, and the reference for the \`defineApplication\` / \`defineEntity\` APIs.`;
