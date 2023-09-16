import React from 'react'

const Feature = () => {
  return (
    <div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5 ">
      <div class="col d-flex align-items-start">
        <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#bootstrap"></use></svg>
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">git init</h3>
          <p>Initializes a new Git repository. If you want to place a project under revision control, this is the first command you need to learn.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#cpu-fill"></use></svg>
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">git add</h3>
          <p>Moves changes from the working directory to the staging area. This gives you the opportunity to prepare a snapshot before committing it to the official history.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#calendar3"></use></svg>
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">git commit</h3>
          <p>
Takes the staged snapshot and commits it to the project history. Combined with git add, this defines the basic workflow for all Git users.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#home"></use></svg>
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">git branch</h3>
          <p>This command is your general-purpose branch administration tool. It lets you create isolated development environments within a single repository.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#speedometer2"></use></svg>
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">git checkout</h3>
          <p>In addition to checking out old commits and old file revisions, git checkout is also the means to navigate existing branches. Combined with the basic Git commands, it’s a way to work on a particular line of development.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#toggles2"></use></svg>
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">git status</h3>
          <p>Displays the state of the working directory and the staged snapshot. You’ll want to run this in conjunction with git add and git commit to see exactly what’s being included in the next snapshot.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#geo-fill"></use></svg>
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">git remote</h3>
          <p>A convenient tool for administering remote connections. Instead of passing the full URL to the fetch, pull, and push commands, it lets you use a more meaningful shortcut.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#tools"></use></svg>
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">git pull</h3>
          <p>Pulling is the automated version of git fetch. It downloads a branch from a remote repository, then immediately merges it into the current branch. This is the Git equivalent of svn update.</p>
        </div>      
      </div>
    </div>
    </div>
  )
}

export default Feature
