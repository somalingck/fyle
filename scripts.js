
async function fetchRepositories() {
    const username = document.getElementById('username').value;
    const repositoriesContainer = document.getElementById('repositories');
    const loader = document.getElementById('loader');
  
    loader.style.display = 'block';
    repositoriesContainer.innerHTML = '';
  
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const repositories = await response.json();
  
      repositories.forEach(repo => {
        const repoElement = document.createElement('div');
        repoElement.classList.add('repository');
        repoElement.innerHTML = `<h3>${repo.name}</h3><p>${repo.description}</p>`;
        repositoriesContainer.appendChild(repoElement);
      });
    } catch (error) {
      console.error('Error fetching repositories:', error);
      repositoriesContainer.innerHTML = '<p>Error fetching repositories. Please try again.</p>';
    } finally {
      loader.style.display = 'none';
    }
  }
  
  document.getElementById('fetchButton').addEventListener('click', fetchRepositories);
  