import { Rule, Tree, chain, move } from '@angular-devkit/schematics';

export function mySchematic(_options: any): Rule {
  return (tree: Tree) => {
    tree.overwrite('./README.md', 'New README content');
  };
}

export function myBrokenSchematic(_options: any): Rule {
  return () => {
    return chain([
      move('./README.md', './docs/README.md'),
      (tree: Tree) => {
        tree.overwrite('./docs/README.md', 'New README content');
      },
    ]);
  };
}
