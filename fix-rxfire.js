#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const rxfirePath = path.join(__dirname, 'node_modules', 'rxfire', 'firestore', 'lite', 'interface.d.ts');

try {
  if (fs.existsSync(rxfirePath)) {
    let content = fs.readFileSync(rxfirePath, 'utf8');
    
    // Check if the fix is already applied
    if (content.includes('export type CountSnapshot = lite.AggregateQuerySnapshot<{')) {
      // Apply the fix: remove the extra generic parameters
      content = content.replace(
        /export type CountSnapshot = lite\.AggregateQuerySnapshot<\{[\s\S]*?count: lite\.AggregateField<number>;[\s\S]*?\}, any, DocumentData>;/g,
        'export type CountSnapshot = lite.AggregateQuerySnapshot<{\n    count: lite.AggregateField<number>;\n}>;'
      );
      
      fs.writeFileSync(rxfirePath, content);
      console.log('✅ Applied rxfire TypeScript fix');
    } else {
      console.log('ℹ️  rxfire fix already applied or not needed');
    }
  } else {
    console.log('ℹ️  rxfire package not found, skipping fix');
  }
} catch (error) {
  console.log('⚠️  Could not apply rxfire fix:', error.message);
} 