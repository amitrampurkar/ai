# Orchestrator for Care Navigation & Documentation Agents

class Orchestrator:
    def __init__(self):
        self.log = []

    def handoff(self, from_agent, to_agent, task):
        entry = {
            "from": from_agent,
            "to": to_agent,
            "task": task,
            "timestamp": "2025-08-23"
        }
        self.log.append(entry)
        return f"Handoff from {from_agent} to {to_agent}: {task}"

# Example usage
if __name__ == "__main__":
    orch = Orchestrator()
    print(orch.handoff("NavigationAgent", "DocumentationAgent", "Referral to Endocrinology"))
