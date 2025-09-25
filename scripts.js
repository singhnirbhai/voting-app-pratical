let votes = {
    DevOps: 0,
    OpenShift: 0,
    Terraform: 0,
    Kubernetes: 0,
    Docker: 0,
    Linux: 0,
    Cloud: 0,
    Jenkins: 0,
    Ansible: 0,
  };
  
  let voted = false;
  
  function vote(candidate) {
    if (voted) {
      alert("You have already voted!");
      return;
    }
  
    votes[candidate]++;
    voted = true;

    document.querySelectorAll("button").forEach(btn => btn.disabled = true);
    for (let person in votes) {
      document.getElementById(person).innerText = `${person}: ${votes[person]} votes`;
    }
  
    alert(`You voted for ${candidate}!`);
  }
  