def assign_priority(issue_type):
    if "outage" in issue_type or "security breach" in issue_type:
        return "high"
    elif "bug"in issue_type or "account issue" in issue_type:
        return "medium"
    else:
        return "low"
    print(f"ticket 1 priority:{assign_priority('website outage')}")
    print(f"ticket 2 priority:{assign_priority('login bug')}")
    print(f"ticket 3 priority:{assign_priority('type on homepage')}")