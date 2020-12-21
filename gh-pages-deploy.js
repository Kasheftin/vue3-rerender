const execa = require('execa')

const bootstrap = async () => {
  try {
    await execa('git', ['checkout', '--orphan', 'gh-pages'])
    await execa('npm', ['run', 'build'])
    await execa('git', ['--work-tree', 'dist', 'add', '--all'])
    await execa('git', ['--work-tree', 'dist', 'commit', '-m', 'gh-pages'])
    await execa('git', ['push', 'origin', 'HEAD:gh-pages', '--force'])
    await execa('rm', ['-r', 'dist'])
    await execa('git', ['checkout', '-f', 'master'])
    await execa('git', ['branch', '-D', 'gh-pages'])
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
}

bootstrap()
